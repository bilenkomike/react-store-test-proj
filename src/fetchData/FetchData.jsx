import axios from 'axios';

class FetchData {
    static instanse = axios.create({
        baseURL: 'http://localhost:4000/',
      });
    

    static getLinks = async () => {
        const query = `query {
            categories {
           name
         }
        }`;

        
        const data = await this.instanse.post('',{
            query,
        });
        return data.data.data.categories;
    }
    

    static getProducts = async (categoryName) => {
        const query = `query {
            categories {
           name,products {
             id, name,inStock,brand, 
             gallery, description, category, 
             attributes{id,name,type,
               items{displayValue,value,id}},
             prices{currency{symbol},amount}
           }
         }
        }
         `;

         const data = await this.instanse.post('',{
            query,
        });
        //  
        return data.data.data.categories.find(category => category.name === categoryName).products;

    }


}


export default FetchData;