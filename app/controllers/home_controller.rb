class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    @filter = params[:q] || "*"
  end

end

