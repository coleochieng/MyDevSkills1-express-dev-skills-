const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};



function deleteSkill(req, res) {
  Skill.delete(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log('req.body', req.body)
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}