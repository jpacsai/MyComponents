// Reduce string by eliminating identical characters next to each other
// eg. 'aaacdcdddsek' => "acdcdsek"

function lineEncoding(s) {
    return s.replace(/(.)\1+/g, chars => '' + chars[0]);
}