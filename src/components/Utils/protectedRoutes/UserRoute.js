import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Axios";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setToken } from "../../../Redux/token";

const UserRoute = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const toast = useToast();
  const token = sessionStorage.getItem('token');
  dispatch(setToken(token))

  
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await instance.get("user/checkuser",  {
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
        } 
        
      } catch (error) {
       
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
              title: error.response.data.message,
              description: "please login",
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
            navigate("/signup", { replace: true });
          }
      }
    };
    checkUser();
  }, [navigate,toast]);

  return children;
};

export default UserRoute;
