class ProductSerializer < ActiveModel::Serializer
  attributes :code, :name, :price, :get_image_url, :product_image
  
end
# def get_image
#   if self.product_image.blob
#           my_object_attachment = self.product_image.blob.key
#           image_url = Cloudinary::Utils.cloudinary_url(my_object_attachment)
               
#     end
  