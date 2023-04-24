class ProductsController < ApplicationController
   # GET /products: return an array of all products
   def  index
    products = Product.all
    render json: products
end

    
# POST /products: create a new product
def create
    product = Product.create(code: params[:code], name: params[:name], image_url: params[:image_url],  price: params[:price], action: params[:action])
    render json: product, status: :created
  end

# GET /products: get product by id
def show
    product = Product.find_by(id: params[:id])
    if product
      render json: product
    else
      render json: { error: "product  not found" }, status: :not_found
    end
  end


def update
    product = Product.find_by(id: params[:id])
    if product
        product.update(products_params)
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
    params.permit(:code, :name, :image_url, :price, :action)
end

end
