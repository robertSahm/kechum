class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    @video  = Video.first
    @filter = params[:q] || nil
    @videos = [@video, @video, @video, @video , @video , @video , @video , @video]
    
  end
  
  def video
    @video = Video.first
  end

end

