import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'One Punch', 'ThunderCats', 'Dragon Ball', ]);

    console.log(categories);

    const onAddCategory = (newCategory)=>{
            setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Zodiaco']);
    }

    return(
        <>
            <h1>Gif Expert App</h1>

            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* <button onClick={onAddCategory}>Add</button> */}

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
};

