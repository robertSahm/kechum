class AddPosterframeAndPositionToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :posterframe, :string
    add_column :videos, :position, :integer
  end
end
