const apiKey = "C3Q0QAGYtb7w6yvFQ7E9bOc0mHIrBieADitE9fggRZdercJKOYK7t9iEk3S8o0pkpLP-qyQSm0lRC7-DZmgLPupTGG_Cs2oB8XkcSp_mL4BHXMmRvk6tgmx9S2TwXHYx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers:{Authorization:`Bearer ${apiKey}`}}).then((response)=>{
            return response.json()
        }).then((jsonResponse)=>{
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business)=>{
                    //console.log(business); // you can use this to find the right values in this object
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            } else {
                throw new Error("An error occured.");
            }
        });
    }
};

export default Yelp;