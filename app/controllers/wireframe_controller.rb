class WireframeController < ApplicationController
  
  def surf
    
  end
  
  def theatre
    
    if signed_in?
      @micropost = current_user.microposts.build
      @feed_items = current_user.feed
    end
  end
  
  def tabloids
    
  end
  
  def screening_room
    
  end
  
  def classroom  
    
  end
  
  def editor
    
  end
  
  def suitcase
    
    
  end
  
  def concessions
    
    
  end
  
  def cutting_room
    
  end
  
  
end
