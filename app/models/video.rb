class Video < ActiveRecord::Base
  attr_accessible :brand, :description, :director, :permalink, :project, :type_of, :url

  before_create :create_permalink
  
  # code that only allows film, tlevsion, digital or, all as type_of 
  
  private
    
    def create_permalink
      # geneerate a 24 digit random number
      number = ""
      24.times do
        n = rand(9)
        number += n.to_s
      end
      self.permalink = number
    end

end
