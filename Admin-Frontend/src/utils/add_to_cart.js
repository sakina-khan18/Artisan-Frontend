
const addTocart=async (userId, productId, quantity)=>{

    try {
        const body={
            userId,
            productId,
            quantity
        };
        const response = await axios.post(`/api/user/${userId}/cart`, body);
        if(response.status === 200){
            toast.success("Product added to cart successfully!");
        }else {
            toast.error("Failed to add product to cart.");
        }
    }catch (e) {

    }
}