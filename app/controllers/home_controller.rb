class HomeController < ApplicationController
  
  def index
  end
  
  def contact
  end
  
  def work
    if params[:q]    
      @filter = ".#{params[:q]}" 
    else
      @filter = ".all"
    end
    # if params[:offset] == '8'
    #   @videos = Video.limit(8).offset(params[:offset])
    #   @back = 16
    #   @forward = nil
    # elsif params[:offset] == '16'
    #   @videos = Video.limit(8).offset(params[:offset])
    #   @back = nil
    #   @forward = 8
    # else
    #   @videos  = Video.limit(8)
    #   @back = 8
    #   @forward = 16
    # end 
    video_full    = Video.limit(24)
    #  split videos up for the carousel - 8 in each frame
    @videos       = video_full[0..7]
    @videos_left  = video_full[8..15]
    @videos_right = video_full[16..23]


  end
  
  def video
    @video = Video.first
  end

end
