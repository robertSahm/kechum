class AddProducerToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :producer, :string
  end
end
