const resumeParser = require("node-resume-parser");

async function parseResume(resumeFile) {
  const resumeText = await resumeFile.text();
  const parsedResume = resumeParser.parse(resumeText);

  return parsedResume;
}

const resumeFile = fs.readFileSync("resume.pdf");
const parsedResume = await parseResume(resumeFile);

console.log(parsedResume);