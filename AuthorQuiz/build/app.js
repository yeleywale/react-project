/** @jsx React.DOM */
(function () {
    'use strict';

    var Quiz = React.createClass({displayName: 'Quiz',
        propTypes: {
            books: React.PropTypes.array.isRequired
        },
        render: function () {
            return React.DOM.div(null, 
                this.props.books.map(function(b) {
                    return Book( {title:b} );
                })
            );
        }
    });

    var Book = React.createClass({displayName: 'Book',
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function () {
            return React.DOM.div(null, React.DOM.h4(null, this.props.title));
        }
    });

    React.renderComponent(Quiz( {books:['The Lord of The Rings', 'The Iliad']} ), 
        document.getElementById('app'));

})();