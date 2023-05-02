class ProductsController < ApplicationController
  # GET /products: return an array of all products
  def  index
      products = Product.all
      # render json: products include:get_image_url
      render json: products
  end

     # GET /products/:id
     def show
        product = Product.find_by(id: params[:id])
        if product
          render json: product
        else
          render json: { error: "product  not found" }, status: :not_found
        end
      end 
  # POST /products: create a new product
#   def create
#     #   product = Product.create!(code: params[:code], name: params[:name],  price: params[:price])
#     product = Product.create!(products_params)  
#     render json: product, status: :created
#     end

def create
    product = Product.new(products_params)
    if product.save!
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
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
      params.permit(:code, :name, :product_image, :price, :quantity)
  end
end
