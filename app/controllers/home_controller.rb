class HomeController < ApplicationController
  
  def index
    @users = User.order('id DESC')
    
  end
  
  def help
    
    
  end
  
  def contact
    
    
  end

  def about
    
    
  end
  
  def channel
    @micropost = current_user.microposts.build if signed_in?
    @feed_items = Micropost.all
    
    
    
  end
  
  def learn
    
    
  end
  
  def news
    
    
  end
  



end

