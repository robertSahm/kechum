class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    @videos  = Video.limit(8)
    @filter = params[:q] || nil    
  end
  
  def video
    @video = Video.first
  end

end

