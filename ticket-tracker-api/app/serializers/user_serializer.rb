class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :projects

  def projects 
    self.object.projects.map do |project| 
      {
        id: project.id,
        name: project.name,
        description: project.description,
        tasks: project.tasks
      }
    end
  end 
end
