class Video < ActiveRecord::Base
  attr_accessible :brand, :description, :director, :permalink, :project, :type_of, :url, :posterframe, :producer

  after_create :create_permalink
  
  validates_inclusion_of :type_of, :in => ['film', 'television', 'digital'], :message => "attribute :type_of must be 'film, television, or digital' "
  
  self.class_eval do
    scope :previous, lambda { |i| {:conditions => ["#{self.table_name}.id < ?", i], :order => "#{self.table_name}.id DESC", :limit => 1 }}
    scope :next, lambda { |i| {:conditions => ["#{self.table_name}.id > ?", i], :order => "#{self.table_name}.id ASC", :limit => 1} }
  end
  
  scope :film, where(:type_of => 'film')
  scope :television, where(:type_of => 'television')
  scope :digital, where(:type_of => 'digital')
  
  private
    
    def create_permalink
      number = "546708330517"
      index = self.id
      self.permalink = "#{index}#{number}"
      self.save!
    end
end
