const execa = require("execa");
  const fs = require("fs");

  (async () => {
    try {
      await execa("git", ["fetch"]);
      await execa("git", ["checkout", "-f", "master"]);
      await execa("git", ["merge", "--ff", "development"]);  
      await execa("git", ["pull", "origin master ", "--allow-unrelated-histories"]);  
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      // Understand if it's dist or build folder
      const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("git", ["--work-tree", folderName, "add", "--all"]);
      await execa("git", ["--work-tree", folderName, "commit", "-m", "master"]);
      console.log("Pushing to master...");
      await execa("git", ["push", "origin", "HEAD:master", "--force"]);
      await execa("rm", ["-r", folderName]);
      await execa("git", ["checkout", "-f", "development"]);
      //await execa("git", ["branch", "-D", "master"]);
      console.log("Successfully deployed");
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();