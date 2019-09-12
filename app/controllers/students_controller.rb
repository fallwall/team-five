class StudentsController < ApplicationController
  def index 
    @students = Student.all
    render json: @students, include: :students, status: :ok
  end

  def show
    @student = Student.find(params[:id])
    render json: @student, include: :student, status: :ok
  end
  
  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student, status: :created
    else
      redner json: @student.errors, status: :unprocessable_entity
    end
  end

  private

  def student_params
    params.require(:student).permit(:username, :first_name, :last_name, :grade, :homeroom)
  end
end
