const skills = [
    {id: 125223, todo: 'HTML', done: false},
    {id: 127904, todo: 'CSS', done: false},
    {id: 139608, todo: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update
  };
  
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const skillIdx = skills.findIndex((t) => t.id === id);
    skills.splice(skillIdx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }