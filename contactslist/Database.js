import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contacts.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY NOT NULL, firstName TEXT NOT NULL, lastName TEXT NOT NULL, phoneNumber TEXT NOT NULL, email TEXT NOT NULL, linkedinLink TEXT NOT NULL, instagramLink TEXT NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertContact = (firstName, lastName, phoneNumber, email, linkedinLink, instagramLink) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into contacts (firstName, lastName, phoneNumber, email, linkedinLink, instagramLink) values (?, ?, ?, ?, ?, ?)',
      [firstName, lastName, phoneNumber, email, linkedinLink, instagramLink],
      null,
      (_, error) => console.log(error)
    );
  });
};


export const updateContact = (id, firstName, lastName, phoneNumber, email, linkedinLink, instagramLink) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE contacts SET firstName = ?, lastName = ?, phoneNumber = ?, email = ?, linkedinLink = ?, instagramLink = ? WHERE id = ?;',
        [firstName, lastName, phoneNumber, email, linkedinLink, instagramLink, id],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteContact = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM contacts WHERE id = ?;',
        [id],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const fetchContacts = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM contacts;',
        [],
        (_, result) => {
          resolve(result);
         },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};