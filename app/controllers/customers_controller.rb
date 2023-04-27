class CustomersController < ApplicationController

   # GET /customers
    def index
      customers = Customer.all
      render json: customers
    end
  
     # GET /customers/:id
    def show
      customer = Customer.find_by(id: params[:id])
      if customer
        render json: customer
      else
        render json: { error: "Customer  not found" }, status: :not_found
      end
    end 
  


  #  creating an new customer
    def create
      customer = Customer.create(full_name: params[:full_name],  contact: params[:contact], email: params[:email])
      render json: customer, status: :created
    end
  
    


     # PATCH /customer/:id
    def update
      customer = Customer.find_by(id: params[:id])
      if customer
        customer.update(customer_params)
        render json: customer 
      else
        render json: { error: "Customer not found" }, status: :not_found
      end
    end

     # DELETE /customer/:id
def destroy
    customer = Customer.find_by(id: params[:id])
    if customer
      customer.destroy!
    else
      render json: { error: "Customer not found" }, status: :not_found
    end
  end

  
    private
  
    def customer_params
      params.permit(:full_name, :contact, :email)
    end
  end
  