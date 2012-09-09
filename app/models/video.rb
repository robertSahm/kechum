class Video < ActiveRecord::Base
  attr_accessible :brand, :description, :director, :permalink, :project, :type_of, :url

  after_create :create_permalink
  
  # code that only allows film, tlevsion, digital or, all as type_of 
  
  private
    
    def create_permalink
      number = "546708330517471623061836"
      index = self.id
      self.permalink = "#{index}#{number}"
      self.save!
    end
end
