class ProductsController < ApplicationController

        # GET /products: return an array of all products
        def  index
            products = Products.all
            render json: products
        end
            
        # POST /spices: create a new product
        def create
            products = Products.create(product_params)
            render json: product, status: :created
        end
    
    
        # PATCH /product/:id: update an existing product
        def update
            product = Product.find_by(id: params[:id])
            if product
                product.update(product_params)
                render json: product
            else
                render json: { error: "Product not found" }, status: :not_found
            end
        end

    
        # DELETE /products/:id: delete an existing product 
        def destroy
            product = Product.find_by(id: params[:id])
            if product
                product.destroy
                head :no_content
                else
                    render json: { error: " Product not found" }, status: :not_found
                end
        end
    
        private
        
        def products_params
            params.permit(:code, :name, :image, :price, :action)
        end
    end
    
end
