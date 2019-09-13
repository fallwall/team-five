class LogsController < ApplicationController
  # before_action :authorize_request, except: %i[index show]
  
  def index 
    @logs = Log.all
    render json: @logs, status: :ok
  end

  def show
    @log = Log.find(params[:id])
    render json: @log, include: :log, status: :ok
  end
  
  def create
    @log = Log.new(log_params)
    if @log.save
      render json: @log, status: :created
    else
      render json: @log.errors, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:log).permit(:feeling_scale, :feelings, :comment, :user_id, feelings: [])
  end

end
