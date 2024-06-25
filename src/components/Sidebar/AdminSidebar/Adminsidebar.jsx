import React, { useEffect, useState } from 'react'
import instance from '../../Axios'

function Adminsidebar() {
    const [custom, setCustom] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get("foodcoustom");
                setCustom(response.data.foodCustomization);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);

    console.log(custom);
    
  return (
    <div>
    {custom.map(custom => (
        <div key={custom._id}>
            <h2>Size Options</h2>
            {custom.sizeOptions.map(size => (
                <div key={size._id}>
                    <p>{size.name} - ${size.price}</p>
                </div>
            ))}

            <h2>Sauce Options</h2>
            {custom.sauceOptions.map(sauce => (
                <div key={sauce._id}>
                    <p>{sauce.name} - ${sauce.price}</p>
                </div>
            ))}
        </div>
    ))}
</div>
  )
}

export default Adminsidebar