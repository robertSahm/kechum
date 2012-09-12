class Video < ActiveRecord::Base
  attr_accessible :brand, :description, :director, :permalink, :project, :type_of, :url, :posterframe, :producer

  after_create :create_permalink
  
  # code that only allows film, televsion, digital or, all as type_of 
  validates_inclusion_of :type_of, :in => ['film', 'television', 'digital'], :message => "attribute :type_of must be 'film, television, or digital' "
  
  private
    
    def create_permalink
      number = "546708330517"
      index = self.id
      self.permalink = "#{index}#{number}"
      self.save!
    end
end
