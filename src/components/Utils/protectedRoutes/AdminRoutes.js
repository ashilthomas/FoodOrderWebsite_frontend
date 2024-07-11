import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Axios";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const {token} =useSelector((state)=>state.tokenData)


  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await instance.get("user/checkAdmin", {
          headers: {
            'Authorization': ` ${token}` // Pass the token here
          }
        });

        const data = res.data;
       

        if (data.success === false) {
          navigate("/signin", { replace: true });
          toast({
            title: data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: data.message,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
      } catch (error) {
        // Handle errors here, including 403 Forbidden
        if (error.response && error.response.status === 403) {
          toast({
            title: "Unauthorized",
            description: "You do not have permission to access this page.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
          navigate("/signin", { replace: true });
        } else {
          toast({
            title: "An error occurred",
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
          navigate("/signin", { replace: true });
        }
      
      }
    };
    checkUser();
  }, [navigate]);

  return children;
};

export default AdminRoutes;
