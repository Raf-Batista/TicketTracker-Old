class ProjectsSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :tasks

  def tasks 
    {
      name: self.object.name,
      description: self.object.description,
      completed: self.object.completed, 
      completed_on: self.object.completed_on, 
      created_on: self.object.timestamp.strftime("%B %d, %Y")
    }
  end 
end
