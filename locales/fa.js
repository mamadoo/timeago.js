module.exports = function(number, index) {
  return [
    ['همین الان', 'همین الان'],
    ['%s ثانیه قبل', 'در %s ثانیه'],
    ['1 دقیقه قبل', 'در 1 دقیقه'],
    ['%s دقیقه قبل', 'در %s دقیقه'],
    ['1 ساعت قبل', 'در 1 ساعت'],
    ['%s ساعت قبل', 'در %s ساعت'],
    ['1 روز قبل', 'در 1 روز'],
    ['%s روز قبل', 'در %s روز'],
    ['1 هفته قبل', 'در 1 هفته'],
    ['%s هفته قبل', 'در %s هفته'],
    ['1 ماه قبل', 'در 1 ماه'],
    ['%s ماه قبل', 'در %s ماه'],
    ['1 سال قبل', 'در 1 سال'],
    ['%s سال قبل', 'در %s سال']
  ][index];
}
