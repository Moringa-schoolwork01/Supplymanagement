class Product < ApplicationRecord
    has_one_attached :product_image
    has_many :sales
    has_many :orders, through: :sales

    def get_image_url
        if self.product_image.blob
                my_object_attachment = self.product_image.blob.key
                image_url = Cloudinary::Utils.cloudinary_url(my_object_attachment)
                     
          end
        end
end
