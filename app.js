const yargs = require("yargs");
const concacts = require("./contacts");
yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      concacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();
// menampilkan daftar semua nama contact & no contact
yargs.command({
  command: "list",
  describe: "Menambahkan contact baru",
  handler() {
    concacts.listContacts();
  },
});
// menampilka detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menambahkan berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    concacts.detailContact(argv.nama);
  },
});
// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    concacts.deleteContact(argv.nama);
  },
});
yargs.parse();
