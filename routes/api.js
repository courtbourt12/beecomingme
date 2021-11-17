const router = require("express").Router();
const mongojs = require("mongojs");
const { Comment, Goal, Step, User } = require("../models");

// Get requests for each model.

router.get("/api/comment/:id", (req, res) => {
  Comment.findById
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/goal/:id", (req, res) => {
  Goal.findById
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbGoal) => {
      res.json(dbGoal);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/step/:id", (req, res) => {
  Step.findById
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbStep) => {
      res.json(dbStep);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/user/:id", (req, res) => {
  User.findById
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Post request for each model file

router.post("/api/comment", ({ body }, res) => {
  Comment.create(body)
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/goal", ({ body }, res) => {
  Goal.create(body)
    .then((dbGoal) => {
      res.json(dbGoal);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/user", ({ body }, res) => {
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/step", ({ body }, res) => {
  Step.create(body)
    .then((dbStep) => {
      res.json(dbStep);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Put request for each model file.

router.put("/api/comment/:id", (req, res) => {
  Comment.findOneAndUpdate
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/goal/:id", (req, res) => {
  Goal.findOneAndUpdate
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbGoal) => {
      res.json(dbGoal);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/step/:id", (req, res) => {
  Step.findOneAndUpdate
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbStep) => {
      res.json(dbStep);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/user/:id", (req, res) => {
  User.findOneAndUpdate
    (
      {
        _id: req.params.id
      },
      req.body
    )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete requests for each model file.

router.delete("/api/comment/:id", (req, res) => {
  Comment.findByIdAndRemove(
    { _id: req.params.id },
    req.body
  )
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/user/:id", (req, res) => {
  User.findByIdAndRemove(
    { _id: req.params.id },
    req.body
  )
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/goal/:id", (req, res) => {
  Goal.findByIdAndRemove(
    { _id: req.params.id },
    req.body
  )
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/step/:id", (req, res) => {
  Step.findByIdAndRemove(
    { _id: req.params.id },
    req.body
  )
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Exporting the router data.

module.exports = router;

// Need a loop to delete each comment associated with a deleted goal. Will do in React.
