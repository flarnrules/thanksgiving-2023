<script type="text/javascript">
    const correctPassword = 'YourPassword'; // Replace 'YourPassword' with your actual password
    const userPassword = prompt("Please enter the password to access recipes:");

    if(userPassword !== correctPassword) {
        document.body.innerHTML = 'Access Denied'
    };
</script>
