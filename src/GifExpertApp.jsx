import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'Simpson' ]);

    // console.log(categories);

    const onAddCategory = (newCategory)=>{

        //comprobando que el campo ingresado en el input sea diferente a los existentes
        if( categories.includes(newCategory)) return; 

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

                {
                    categories.map((category) => (
                        <GifGrid key={ category } 
                                    category={category}
                        />
                        ))
                //     categories.map((category) => {
                //         return (
                //             <div key={category}>
                //                 <h3>{category}</h3>
                //                 <li >{category}</li>
                //             </div>
                //         )
                //     })
                }
        </>
    )
}

