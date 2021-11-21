exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "category") {
    return `/category/${doc.uid}`;
  }

  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }

  // URL for a portfolio type
  if (doc.type === "portfolio") {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
