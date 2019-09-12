class LogsController < ApplicationController
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
      redner json: @log.errors, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:log).permit(:feeling_scale, :feelings, :comment, :student)
  end

end
