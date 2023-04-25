class ProductSerializer < ActiveModel::Serializer
  attributes :code, :name, :image_url, :price, :action, :product_image
end
def get_image_url
  if self.product_image.blob
          my_object_attachment = self.product_image.blob.key
          image_url = Cloudinary::Utils.cloudinary_url(my_object_attachment)
               
    end
  end