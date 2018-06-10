import _ from 'lodash';
import SelectedOptions from '../models/selectedOptionsModel';
import { sendEmail } from '../../../email/emailController';

// Server usage methods

export function allSelectedOptions() {
  return SelectedOptions.find({}).exec((err, selectedOptions) => {
    if (err) {
      console.log('Error in first query');
      return Error('Something went wrong getting the data');
    // return res.status(500).send('Something went wrong getting the data');
    }

  // return selectedOptions;
  // return res.json(selectedOptions);
  });
}


/**
 * SelectedOptions
 */
export function all(req, res) {
  return SelectedOptions.find({}).exec((err, selectedOptions) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(selectedOptions);
  });
}

/**
 * Add a SelectedOptions
 */
export function add(req, res) {
  SelectedOptions.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return sendEmail(req, res)

  // return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
export function update(req, res) {
  const query = {
    id: req.params.id
  };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    SelectedOptions.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    SelectedOptions.findOneAndUpdate(query, {
      $inc: {
        count: isIncrement ? 1 : -1
      }
    }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
}

/**     
 * Remove a topic
 */
export function remove(req, res) {
  const query = {
    id: req.params.id
  };
  SelectedOptions.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  allSelectedOptions,
  all,
  add,
  update,
  remove
};
