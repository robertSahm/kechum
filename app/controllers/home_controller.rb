class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work    
    @filter = params[:q] || nil 
    if params[:offset] == '8'
      @videos = Video.limit(8).offset(params[:offset])
      @back = 16
      @forward = nil
    elsif params[:offset] == '16'
      @videos = Video.limit(8).offset(params[:offset])
      @back = nil
      @forward = 8
    else
      @videos  = Video.limit(8)
      @back = 8
      @forward = 16
    end  
  end
  
  def video
    @video = Video.first
  end

end

# when on work 
  # back is offset 8
  # forward is offset 16
# when on work offset 8
  # back is offset 16
  #forward is no offset 
# when on work offset 16
  # back is no offset
  # forward is offset 8  