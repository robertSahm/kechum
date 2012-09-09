class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    @video  = Video.first
    @filter = params[:q] || "*"
    @videos = [@video, @video, @video, @video , @video , @video , @video , @video]
    
  end

end

