class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    @video  = Video.first
    @filter = params[:q] || "*"
    
  end

end

