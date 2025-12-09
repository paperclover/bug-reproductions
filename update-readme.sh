#!/usr/bin/env bash
function getContents() {
  echo "# clover's bug reports"
  echo ""
  echo "a bug reproduction is created per branch. this way i can have a more managed github profile"
  echo ""
  echo "## branches"
  echo ""
  jj log --no-graph -r 'all() ~ master ~ zzzzzz' -T '"- [" ++ description.first_line() ++ "](https://github.com/paperclover/bug-reproductions/tree/" ++ stringify(bookmarks.filter(|i| !i.remote())) ++ ")\n"'
  echo ""
}
getContents >readme.md
echo "---"
cat readme.md
