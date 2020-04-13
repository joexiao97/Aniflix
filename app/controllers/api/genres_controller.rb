class Api::GenresController < ApplicationController

    def index
        @genres = Genre.includes(:shows_under_genre)
        # @shows = Show.all
        render :index
    end

    def show
        @genre = Genre.find(params[:id])
        render :show
    end

end