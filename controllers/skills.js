const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skill/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

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
  // render the new.ejs that contains a form
  res.render('skills/new');
}

function show(req, res) {
  const todo = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  const todos = Skill.getAll();
  res.render('skills/index', { todos });
}