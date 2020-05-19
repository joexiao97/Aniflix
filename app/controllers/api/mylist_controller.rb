
class Api::MylistController < ApplicationController
    
    def index
        @my_list_shows = current_user.my_list_shows
        if @my_list_shows
            render :index
        else 
            render json: ["My List is empty"], status: 400
        end 
    end 

    def create
        my_list_show = Mylist.new(user_id: current_user.id, movie_id: params[:movie_id]) 
        if my_list_show.save
            @my_list_shows = current_user.my_list_shows
            render :index 
        else 
            render json: ["Show already in my list"], status: 400
        end 
    end 

    def destroy
        my_list = current_user.mylist.find_by(movie_id: params[:id])
        if my_list
            my_list.destroy

            @my_list_shows = current_user.my_list_shows 
            render :index
        else
            render json: ["Video not in my list"], status: 400
        end 
    end 
end