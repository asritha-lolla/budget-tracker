import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'Loans', 'Savings', 'Expenses'];

const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleDrawerToggle = () => {
        setToggle((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Budget Tracker
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            // Use Link for navigation
                            <Link to={item === 'Loans' ? '/loans' : item === 'Savings' ? '/savings' :item === 'Expenses' ? '/expenses' :item === 'Home' ? '/' : '#'} key={item} style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={toggle}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            Budget Tracker
                        </Typography>
                        <Divider />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        {/* Use Link in Drawer for navigation */}
                                        <Link to={item === 'Loans' ? '/loans' : item === 'Savings' ? '/savings' : item === 'Expenses' ? '/expenses' : '#'} style={{ textDecoration: 'none' }}>
                                            <ListItemText primary={item} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </Box>
    );
};

export default Header;
