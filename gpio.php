<?php
    shell_exec("/usr/local/bin/gpio -g mode 14 out");
    if(isset($_GET['off']))
        {
                        echo "LED is off";
                        shell_exec("/usr/local/bin/gpio -g write 14 0");
        }
            else if(isset($_GET['on']))
            {
                        echo "LED is on";
                        shell_exec("/usr/local/bin/gpio -g write 14 1");
            }
?>
